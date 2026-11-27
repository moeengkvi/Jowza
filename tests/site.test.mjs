import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("صفحه اصلی فارسی و راست‌چین است", async () => {
  const html = await readFile("index.html", "utf8");
  assert.match(html, /lang="fa"/);
  assert.match(html, /dir="rtl"/);
  assert.match(html, /جوزا/);
});

test("اطلاعات تماس و سفارش امن هستند", async () => {
  const source = await readFile("src/main.js", "utf8");
  assert.match(source, /wa\.me\/989037822307/);
  assert.match(source, /encodeURIComponent/);
  assert.match(source, /aria-live/);
});
