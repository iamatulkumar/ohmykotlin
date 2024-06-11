'use server';
import {db} from "@/app/lib/db";
import {redirect} from "next/navigation";

export async function getRepositoryData() {
    try {
        return await db.data.findMany();
    } catch (err) {
        return null;
    }
}

export async function submitFeedBack(data:any) {
    try {
        return await db.feedback.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message
            }
        })
    } catch (err) {
        return null;
    }
}

export async function submitNotify(data:any) {
    try {
        return await db.notify.create({
            data: {
                email: data.email,
            }
        })
    } catch (err) {
        return null;
    }
}