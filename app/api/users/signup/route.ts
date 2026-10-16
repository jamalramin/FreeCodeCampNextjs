import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { error } from "console";



connect()

export async function POST (request : NextRequest){
try {
    const reqBody = await request.json()
    const {usernmae , email , password } = reqBody

    console.log(reqBody);

    const user = await User.findOne({email})

    if (user){
        return NextResponse.json({error: "User already Exists!! "}, {status :400})
    }
} 

catch (error) {
    return NextResponse.json({error: error.message}, {status:500}
    )
}
}
