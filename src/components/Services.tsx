import { useEffect, useState } from "react";
import { servicesImg1, smallScreen } from "../utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  return (
    <section className="services-container flex-center text-center">
      <div className="section-text-wrapper">
        <h1 className="section-heading">Our Expertise</h1>
        <p className="section-desc">
          From concept to execution, we empower your brand with design and
          development that'll drive business growth.{" "}
        </p>
      </div>
      <div className="services-tiles">
        <Card className="services-card">
          <div className="flex flex-col gap-5 items-start justify-start p-0">
            <img src={servicesImg1} alt="Designing Icon" />
            <p className="w-full text-2xl font-[500] text-start">Logo Designing</p>
          </div>

          <div className="card-content">
            <p>Card Content</p>
          </div>
          <div className="card-footer">
            <p>Card Footer</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default Services;
