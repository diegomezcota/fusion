export default {
    greet: async ({name}, ctx) => {
      return {greeting: `hello ${name}`}
    }
  }