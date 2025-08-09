"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import styles from "./auth.module.scss";
import { fetchRandomUser } from "@/utils/fetchRandomUser";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

const PhoneSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست. فرمت: 09XXXXXXXXX"),
});

type FormValues = z.infer<typeof PhoneSchema>;

export default function AuthPage() {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(PhoneSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const user = await fetchRandomUser();
      (user as any).phone = data.phone;
      login(user);
      router.push("/dashboard");
    } catch (e) {
      console.error(e);
      alert("خطا در گرفتن کاربر تصادفی");
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <h1>ورود</h1>
        <Input
          label="شماره موبایل"
          placeholder="09xxxxxxxxx"
          {...register("phone")}
          error={errors.phone?.message?.toString() ?? null}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </main>
  );
}
