
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("destinations").truncate()
  await knex("destinations").insert([
    { name: "Hawaii"},
    { name: "Whistler"},
    { name: "Mallorca"}
  ])
};
