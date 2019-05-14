import styled from 'styled-components'

export default styled.ol`
  counter-reset: parent;
  list-style-type: none;
  padding: 0em;
  margin: 0em;

  li {
    font-size: 0.9375em;
    display: inline-block;
    margin: ${0.175 + 0.25}em 0em;
    margin-right: ${p => p.sm? '0em' : p.theme.spacing.gutters[2]};
    color: ${p => p.theme.colors.primary.txt.main};
  }

  li::before {
    counter-increment: parent;
    content: counter(parent);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    width: 1.25em;
    height: 1.25em;
    font-weight: 600;
    margin-right: ${p => p.theme.spacing.gutters[0]};
    color: ${p => p.theme.colors.primary.txt.dark};
    border: 0.125em solid ${p => p.theme.colors.primary.txt.dark};
    border-radius: 50%;
    text-align: center;
    transform: translateY(0.1em);
  }

  div:last-of-type > li:last-of-type {
    margin-right: 0
  }

  div:last-of-type > li:last-of-type::before {
    margin-right: ${p => p.sm? '0em' : p.theme.spacing.gutters[0]};
  }

  .active::before {
    border-color: ${p => p.theme.colors.accent.main};
    color: ${p => p.theme.colors.primary.txt.main};
    margin-right: ${p => p.theme.spacing.gutters[0]} !important;
  }

  .clickable {
    cursor: pointer;
  }

  .clickable::before {
    color: ${p => p.theme.colors.primary.txt.main};
    transition: border-color 0.1s;
  }

  .clickable:hover::before {
    border-color: ${p => p.theme.colors.accent.light};
  }

  
`