import Link from "next/link";
import { useEffect, useState } from "react";
import LayoutMin from "../src/layout/LayoutMin";
import PageBanner from "../src/layout/PageBanner";
import { getPagination, pagination } from "../src/utilits";

export default function Home() {
  const [outfitInput, setOutfitInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ outfit: outfitInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setOutfitInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <LayoutMin pageName={"Outfit Generator"}>
      <div>
        <main>
          <div class="block-60"></div>
          <div class="gen-container">
            <form onSubmit={onSubmit}>
              <div class="gen-form-group">
                <input type="submit" value="Generate" />
                <input
                  type="text"
                  name="outfit"
                  placeholder="Enter an outfit"
                  value={outfitInput}
                  onChange={(e) => setOutfitInput(e.target.value)}
                />
              </div>
            </form>
            <div class="gen-form-group">
              <div>{result}</div>
            </div>
          </div>
        </main>
      </div>
    </LayoutMin>
  );
}