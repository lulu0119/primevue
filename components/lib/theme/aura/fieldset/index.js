export default {
    css: `
.p-fieldset {
    border: 1px solid var(--p-dark-surface-700, var(--p-surface-200));
    background: var(--p-dark-surface-900, var(--p-surface-0));
    color: var(--p-dark-surface-0, var(--p-surface-700));
    border-radius: 6px;
    padding: 0 1.125rem 1.125rem 1.125rem;
    margin: 0;
}

.p-fieldset-legend {
    font-weight: 600;
    border-radius: 6px;
    border: 0 none;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.375rem;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggleable > .p-fieldset-legend > a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    color: var(--p-dark-surface-0, var(--p-surface-700));
    border-radius: 6px;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover {
    color: var(--p-dark-surface-0, var(--p-surface-800));
    background: var(--p-dark-surface-800, var(--p-surface-100));
}

.p-fieldset-toggler {
    color: var(--p-dark-surface-400, var(--p-surface-500));
    transition: color var(--p-transition-duration);
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover > .p-fieldset-toggler {
    color: var(--p-dark-surface-300, var(--p-surface-600));
}

.p-fieldset .p-fieldset-content {
    padding: 0;
}    
    `
};