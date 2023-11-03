let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some; // Тепер це безпечне призначення, так як ми перевірили тип.
}

export {};
