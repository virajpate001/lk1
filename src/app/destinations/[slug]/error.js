// src/app/destinations/[slug]/error.js
"use client";

import { useEffect } from "react";
import ServiceUnavailable from "@/components/ui/ServiceUnavailable";

export default function DestinationError({ error, reset }) {
  useEffect(() => {
    console.error("Destination page error:", error);
  }, [error]);

  return (
    <ServiceUnavailable
      title="Couldn't load this destination"
      message="We're having trouble loading this page right now. Please try again, or reach us directly."
    />
  );
}