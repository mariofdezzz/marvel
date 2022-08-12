<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div id="attribution">
      <span> Data provided by Marvel. © 2014 Marvel </span>
      <span>
        Made with ❤️ by

        <a href="https://github.com/mariofdezzz" target="_blank">
          @mariofdezzz
        </a>
      </span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

footer {
  padding: 1rem 0;
  border-top: 1px solid $on-bg;
  display: grid;
  grid-template: auto 1fr auto / 1fr min(100ch, calc(100% - 2rem)) 1fr;

  #attribution {
    grid-column: 2;
    color: $on-bg;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 1rem;

    a {
      font-weight: 700;
    }
  }
}
</style>
