# svelte-react

![svelte-react-kit](docs/svelte.png)

Use React components inside Svelte apps.

This repo is the mirror of [RichHarris/react-svelte](https://github.com/Rich-Harris/react-svelte/blob/master/README.md) with some bonus given we also add MaterialUI to the mix here.

```svelte
<script>
  import Button from "@material-ui/core/Button";
  import ReactAdapter from "./utils/ReactAdapter.svelte";
</script>

<ReactAdapter
  el={Button}
  class="mui-btn"
  children="Hello"
  variant="contained"
  color="primary"
  onClick={() => alert("hello world!")}
/>

<style>
  /**
   * Styling a React Component from within a Svelte Component.
   */
  :global(.mui-btn) {
    margin: 20px;
  }
</style>
```

Check the live demo [here](https://svelte-react.surge.sh), and don't forget to see the [BlogPost: Using React Within Svelte Apps](https://jpepinho.medium.com/using-react-within-your-svelte-applications-3b1f2a75aefc).

## Usage

```bash
npm i svelte-react-kit
```

You can also check a sample app [here](https://github.com/jpinho/svelte-react-sample-app).

## License

[MIT](LICENSE)
