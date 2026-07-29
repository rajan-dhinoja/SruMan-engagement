import { NextRequest, NextResponse } from "next/server";
import { put, list, get } from "@vercel/blob";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BLOB_NAME = "wishes.json";

// Default wishes
const DEFAULT_WISHES = [
  {
    id: "1",
    name: "Ajaybhai Dhinoja",
    message:
      "મારી વ્હાલી દીકરી સૃષ્ટિ અને જમાઈ અમનને સગાઈની ખૂબ ખૂબ શુભેચ્છાઓ. પ્રભુ તમારા બંનેના જીવનને હંમેશા પ્રેમ અને ખુશીઓથી ભરી રાખે તેવી જ મંગલ કામના!",
    date: "૨ કલાક પહેલા",
    theme: "gold",
  },
  {
    id: "2",
    name: "Reenaben Dhinoja",
    message:
      "લાડકડી સૃષ્ટિ અને વ્હાલા અમન, તમારી આ નવી સફર ખૂબ જ સુંદર અને સુખમય રહે. બંનેને જીવનભરના સાથ અને પ્રેમ માટે મારા હૃદયપૂર્વકના આશીર્વાદ!",
    date: "૨ કલાક પહેલા",
    theme: "purple",
  },
  {
    id: "3",
    name: "Riki Dhinoja",
    message:
      "Congratulations Srushti and Aman! I am so excited for both of you as you step into this beautiful journey of togetherness. Wish you a lifetime of love and laughter!",
    date: "૪ કલાક પહેલા",
    theme: "rose",
  },
  {
    id: "4",
    name: "Rajan Dhinoja",
    message:
      "To the coolest couple, Srushti and Aman! May your bond grow stronger with each passing day. Welcome to the family, Aman! Cheers to your beautiful future.",
    date: "૫ કલાક પહેલા",
    theme: "blue",
  },
  {
    id: "5",
    name: "Muraribhai Natani",
    message:
      "प्रिय बेटे अमन और बहू सृष्टि को सगाई की हार्दिक शुभकामनाएं। ईश्वर से यही प्रार्थना है कि आप दोनों का जीवन आपसी प्रेम, सम्मान और खुशियों से महकता रहे।",
    date: "૧ દિવસ પહેલા",
    theme: "emerald",
  },
  {
    id: "6",
    name: "Sudhalataben Natani",
    message:
      "प्यारे अमन और प्यारी सृष्टि, तुम दोनों की जोड़ी हमेशा सलामत रहे। इस नए सफर की शुरुआत पर ढेर सारा प्यार और आशीर्वाद। सदैव खुश रहो!",
    date: "૧ દિવસ પહેલા",
    theme: "rose",
  },
];

async function getWishes() {
  try {
    const { blobs } = await list({ prefix: BLOB_NAME, limit: 1 });
    if (blobs.length > 0) {
      const blob = blobs[0];
      const url = new URL(blob.url);
      url.searchParams.set("t", Date.now().toString());
      
      const result = await get(url.toString(), { access: "private" });
      if (result) {
        const text = await new Response(result.stream).text();
        return JSON.parse(text);
      }
    }
  } catch (error) {
    console.error("Error reading wishes from private Blob:", error);
  }
  
  // If no blob exists or fetch fails, return default wishes
  return DEFAULT_WISHES;
}

async function saveWishes(wishes: any) {
  await put(BLOB_NAME, JSON.stringify(wishes, null, 2), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

export async function GET(request: NextRequest) {
  try {
    const wishes = await getWishes();
    return NextResponse.json(wishes);
  } catch (error) {
    console.error("Error reading wishes:", error);
    return NextResponse.json(DEFAULT_WISHES);
  }
}

export async function POST(request: NextRequest) {
  try {
    const newWish = await request.json();

    // Validate wish data
    if (!newWish.name || !newWish.message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    // Read existing wishes
    const wishes = await getWishes();

    // Add new wish
    const wish = {
      id: String(Date.now()),
      name: newWish.name,
      message: newWish.message,
      date: "હમણાં જ",
      theme: newWish.theme || "gold",
    };

    wishes.unshift(wish); // Add to beginning

    // Write back to Blob
    await saveWishes(wishes);

    return NextResponse.json(wish, { status: 201 });
  } catch (error) {
    console.error("Error adding wish:", error);
    return NextResponse.json(
      { error: "Failed to add wish" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const wishId = searchParams.get("id");

    if (!wishId) {
      return NextResponse.json(
        { error: "Wish ID is required" },
        { status: 400 }
      );
    }

    let wishes = await getWishes();
    wishes = wishes.filter((wish: any) => wish.id !== wishId);

    await saveWishes(wishes);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting wish:", error);
    return NextResponse.json(
      { error: "Failed to delete wish" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedWish = await request.json();
    let wishes = await getWishes();

    // If an array is sent, assume it's a full list replacement (for reordering)
    if (Array.isArray(updatedWish)) {
      await saveWishes(updatedWish);
      return NextResponse.json(updatedWish);
    }

    if (!updatedWish.id) {
      return NextResponse.json(
        { error: "Wish ID is required" },
        { status: 400 }
      );
    }

    const index = wishes.findIndex((wish: any) => wish.id === updatedWish.id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Wish not found" },
        { status: 404 }
      );
    }

    wishes[index] = {
      ...wishes[index],
      name: updatedWish.name || wishes[index].name,
      message: updatedWish.message || wishes[index].message,
      theme: updatedWish.theme || wishes[index].theme,
    };

    await saveWishes(wishes);

    return NextResponse.json(wishes[index]);
  } catch (error) {
    console.error("Error updating wish:", error);
    return NextResponse.json(
      { error: "Failed to update wish" },
      { status: 500 }
    );
  }
}
