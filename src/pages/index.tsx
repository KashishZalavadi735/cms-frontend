import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
      >
        <div
          className={`card text-center shadow-lg py-5 px-4 rounded-4 ${styles.indexCard}`}
        >
          {/* Icon */}
          <div className="mb-3">
            <Image
              src="/images/college_students.png"
              alt="College-Students-img"
              width={300}
              height={250}
              priority
            />
          </div>

          {/* Title */}
          <h3 className="fw-bold mb-5">
            Welcome to College Management System
          </h3>

          <Link href="/Login">
            <button className={`${styles.LoginBtn}`}>Go to Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

Home.noLayout = true;
