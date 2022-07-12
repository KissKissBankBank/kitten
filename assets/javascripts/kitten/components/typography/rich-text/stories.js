import React from 'react'
import { RichText } from './index'
import { DocsPage } from 'storybook/docs-page'
import styled, { createGlobalStyle } from 'styled-components'
import { TitleWithStroke } from 'kitten'

export default {
  component: RichText,
  title: 'Typography/RichText',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="RichText" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],

  args: {
    size: 'medium'
  },

  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio',
    }
  },
}

const StyledWrapper = styled.div`
  /* Wrapper styles */
  width: 100%;
  margin: 0 auto;

  &.size-small {
    max-width: 300px;
  }
  &.size-medium {
    max-width: 700px;
  }
  &.size-large {
    max-width: 900px;
  }

  transition: max-width var(--transition);
`

const CssReset = createGlobalStyle`
  /* KissKiss basic reset */

  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
    overscroll-behavior: none;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }

  form {
    padding: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
  }

  abbr {
    text-decoration: none;
  }

  /* Img */

  img[alt]:not([alt='']) {
    /* Only select images with a non-empty alt */
    font-family: Maax;
    font-weight: lighter;
    font-size: 12px;
  }

  img[alt]:not([alt=''])::before {
    /* More code for Firefox */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 2em;
  }
`

export const Default = args => (
  <StyledWrapper className={`size-${args.size}`}>
    <CssReset />
    <TitleWithStroke modifier="secondary">Titre Kitten de la section</TitleWithStroke>
    <RichText {...args}>
      <h2>Maecenas faucibus mollis interdum</h2>
      <p><strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <em>Sed posuere consectetur est at lobortis.</em> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</p>
      <p>Cum sociis natoque penatibus et <a href="https://www.kisskissbankbank.com">magnis dis parturient montes</a>, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
      <img src="/kitten-0.jpg" alt="" />
      <h3>Maecenas faucibus mollis interdum</h3>
      <blockquote><p>Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote>
      <p>Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <ul>
        <li><strong>Vivamus sagittis lacus vel augue</strong> laoreet rutrum faucibus dolor auctor.</li>
        <li><strong>Cum sociis natoque penatibus</strong> et magnis dis parturient montes, nascetur ridiculus mus.</li>
        <li><strong>Sed posuere.</strong></li>
        <li><strong>Cras mattis.</strong></li>
      </ul>
      <h3>Maecenas faucibus mollis interdum</h3>
      <p>Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <ol>
        <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
        <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
        <li>Sed posuere.</li>
        <li>Cras mattis.</li>
      </ol>
      <h4>Maecenas faucibus mollis interdum</h4>
      <p>Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <h4>Maecenas faucibus mollis interdum</h4>
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

      <img src="/kitten-1.jpg" alt="" width="900" />
      <img src="/kitten-2.jpg" alt="" width="900" />

      <p>Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <img src="/kitten-6.jpg" alt="" width="200" />

      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

    </RichText>
  </StyledWrapper>
)
