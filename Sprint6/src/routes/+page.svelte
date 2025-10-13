<script>
    import ChecklistItem from './lab/checklist/ChecklistItem.svelte';

    let checkedCount = 0;
    let item = { id: 1, label: 'Check box', done: false };
    function handleChange(event) {
        item.done = event.detail.done;
        checkedCount = item.done ? 1 : 0;
    }
</script>

<h1 data-testid="title">Progress Checklist</h1>
<ChecklistItem
    id={item.id}
    label={item.label}
    done={item.done}
    on:change={handleChange}
/>
<p>Checked steps: {checkedCount}</p>