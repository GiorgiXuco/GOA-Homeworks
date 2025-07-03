// 1) შევქმანთ new Map ზღვის ლომების ტიპი
//   1. სახელი, გვრი, საცხოვრებელი 
//   2. დავამატოთ ასაკი ჩენი ზღვის ლომის
//   3. for of ით გადავუაროთ zgvisLomebi.keys() და მათი value ები გამომიტანეთ კონსოლში



const zgvisLomebi = new Map();

zgvisLomebi.set("lomi1", {
    saxeli: "ლუკა",
    gvari: "ზღვისლომიძე",
    sacxovrebeli: "წყნარი ოკეანე"
});

zgvisLomebi.set("lomi2", {
    saxeli: "ნიკა",
    gvari: "ლომიშვილი",
    sacxovrebeli: "ატლანტის ოკეანე"
});

const lomi1 = zgvisLomebi.get("lomi1");
lomi1.asaki = 5;
zgvisLomebi.set("lomi1", lomi1);

for (const key of zgvisLomebi.keys()) {
    const value = zgvisLomebi.get(key);
    console.log("Key:", key);
    console.log("Value:", value);
}
