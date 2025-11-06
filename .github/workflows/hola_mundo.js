function main() {
  const nombre = process.env.USERNAME || process.env.USER || "usuario";
  console.log(`¡Hola, ${nombre} desde GitHub!`);
}

main();
