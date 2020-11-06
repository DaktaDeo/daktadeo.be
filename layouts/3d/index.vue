<script>
export default {
  name: 'ddd',
  async asyncData(context) {
    const { $content, app } = context;
    const prints = await $content(`${app.i18n.locale}/3d/prints'`).fetch();

    return {
      prints,
    }
  },
}
</script>
