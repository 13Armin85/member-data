"use client";

import React, { useEffect } from "react";
import styles from "./dashboard.module.scss";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/auth");
  }, [user, router]);

  if (!user) return null;

  const fmt = (v: any) => (typeof v === "object" ? JSON.stringify(v) : v);

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img
            src={user.picture?.large}
            alt="avatar"
            className={styles.avatar}
          />
          <div>
            <h1>
              {user.name?.title} {user.name?.first} {user.name?.last}
            </h1>
            <p>{user.email}</p>
            <p>
              {user.phone} / {user.cell}
            </p>
          </div>
        </div>

        <section className={styles.grid}>
          <div>
            <strong>Username</strong>
            <div>{user.login?.username}</div>
          </div>
          <div>
            <strong>UUID</strong>
            <div>{user.login?.uuid}</div>
          </div>
          <div>
            <strong>DOB</strong>
            <div>
              {user.dob?.date} ({user.dob?.age})
            </div>
          </div>
          <div>
            <strong>Registered</strong>
            <div>{user.registered?.date}</div>
          </div>
          <div className={styles.location}>
            <strong>Location</strong>
            <div>
              {user.location?.street?.number} {user.location?.street?.name},
              <br />
              {user.location?.city}, {user.location?.state},{" "}
              {user.location?.country}
              <br />
              Postcode: {fmt(user.location?.postcode)}
            </div>
          </div>
          <div>
            <strong>ID</strong>
            <div>
              {user.id?.name} — {user.id?.value}
            </div>
          </div>
          <div>
            <strong>Nationality</strong>
            <div>{user.nat}</div>
          </div>
        </section>

        <div className={styles.actions}>
          <button
            className={styles.logout}
            onClick={() => {
              logout();
              router.push("/auth");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
