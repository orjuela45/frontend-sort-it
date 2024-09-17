<script lang="ts">
  import { Form, Input, Title } from '$lib/components/common';
  let test: string;
</script>

<Form atributes={{}}>
  <Title title="Sort It!"/>
  <Input label="test" bind:value={test} atributes={{type: 'text'}} />
</Form>