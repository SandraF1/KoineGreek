// testGrammarAPI.js
const fetch = require("node-fetch");

const testUnits = [1, 2, 3, 99]; // Include a non-existent unit for edge case

const testGrammarFetch = async (unit) => {
  try {
    const res = await fetch(`https://koinegreek.onrender.com/api/grammar?unit=${unit}`);
    const data = await res.json();

    console.log(`\nUnit ${unit}:`);
    if (Array.isArray(data) && data.length > 0) {
      console.log(`✅ Received ${data.length} item(s). Sample:`);
      console.log(data[0]);
    } else {
      console.log("⚠️ No data returned.");
    }
  } catch (err) {
    console.error(`❌ Error fetching unit ${unit}:`, err.message);
  }
};

(async () => {
  for (const unit of testUnits) {
    await testGrammarFetch(unit);
  }
})();
