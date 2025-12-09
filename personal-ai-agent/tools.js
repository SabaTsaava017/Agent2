
export async function weatherTool(input) {
    const city = input.match(/in (\w+)/i)?.[1] || "Tbilisi";
    return `დღეს ${city}-ში მზიანი ამინდი იქნება, ტემპერატურა ~20°C.`;
}

export function calculatorTool(input) {
    try {
        const expr = input.replace(/[^\d\+\-\*\/\.]/g, "");
        const result = eval(expr);
        return `შედეგი: ${result}`;
    } catch {
        return "გამოთვლის შეცდომა.";
    }
}

export async function wikiTool(input) {
    const query = input.replace(/(ვიკი|who is|what is)/i, "").trim();
   
    return `ვიკიპედია პასუხი '${query}' შესახებ (მოკლე სიმულაცია).`;
}


export async function runAgent(input) {
    const lower = input.toLowerCase();
    if (lower.includes("ამინდი") || lower.includes("weather")) {
        return await weatherTool(input);
    } else if (lower.includes("გამოთვალე") || lower.includes("calculate")) {
        return calculatorTool(input);
    } else if (lower.includes("ვიკი") || lower.includes("who is") || lower.includes("what is")) {
        return await wikiTool(input);
    } else {
        return "ვწუხვარ, ვერ გავიგე, რომელ Tool-ს უნდა გამოვიყენო.";
    }
}
