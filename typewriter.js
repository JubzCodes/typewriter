const sentence = "hello there from jaden's house";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i] + "\n");
  }, 50 * i) 
}
