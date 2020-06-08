import React from 'react';
import NextGoogleFontsHelper from '../src';
import renderer from 'react-test-renderer';

test('<NextGoogleFontsHelper/>', () => {
  const component = renderer.create(
    <NextGoogleFontsHelper fonts={['Montserrat:wght@300;400;500;600']} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
