import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: NextRequest) {
  try {
    const { data: wishes, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching wishes from Supabase:", error);
      return NextResponse.json([]); 
    }

    return NextResponse.json(wishes || []);
  } catch (error) {
    console.error("Error in GET wishes:", error);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const newWish = await request.json();

    if (!newWish.name || !newWish.message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const wish = {
      id: newWish.id || String(Date.now()),
      name: newWish.name,
      message: newWish.message,
      date: newWish.date || "હમણાં જ",
      theme: newWish.theme || "gold",
    };

    const { data, error } = await supabase
      .from("wishes")
      .insert([wish])
      .select()
      .single();

    if (error) {
      console.error("Error inserting wish into Supabase:", error);
      return NextResponse.json({ error: "Failed to add wish" }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error in POST wish:", error);
    return NextResponse.json({ error: "Failed to add wish" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const wishId = searchParams.get("id");

    if (!wishId) {
      return NextResponse.json({ error: "Wish ID is required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("wishes")
      .delete()
      .eq("id", wishId);

    if (error) {
      console.error("Error deleting wish from Supabase:", error);
      return NextResponse.json({ error: "Failed to delete wish" }, { status: 500 });
    }

    return NextResponse.json({ success: true, wishId });
  } catch (error) {
    console.error("Error in DELETE wish:", error);
    return NextResponse.json({ error: "Failed to delete wish" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedWish = await request.json();

    // If an array is sent, assume it's a full list replacement (for reordering)
    if (Array.isArray(updatedWish)) {
      console.warn("Array PUT is not fully supported with Supabase yet. Returning array.");
      return NextResponse.json(updatedWish);
    }

    if (!updatedWish.id) {
      return NextResponse.json({ error: "Wish ID is required" }, { status: 400 });
    }

    const updateData: any = {};
    if (updatedWish.name) updateData.name = updatedWish.name;
    if (updatedWish.message) updateData.message = updatedWish.message;
    if (updatedWish.theme) updateData.theme = updatedWish.theme;
    
    // date logic could be applied here as well if they modify it

    const { data, error } = await supabase
      .from("wishes")
      .update(updateData)
      .eq("id", updatedWish.id)
      .select()
      .single();

    if (error) {
      console.error("Error updating wish in Supabase:", error);
      return NextResponse.json({ error: "Failed to update wish" }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in PUT wish:", error);
    return NextResponse.json({ error: "Failed to update wish" }, { status: 500 });
  }
}
