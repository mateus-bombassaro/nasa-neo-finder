import TestRenderer from 'react-test-renderer';
import { Heading } from './Heading';

describe('Heading', () => {
  test('should set classes', () => {
    const testRenderer = TestRenderer.create(
      <Heading className="class">Texto</Heading>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('h1').props.className).toContain('class');
  });

  test('should set text', () => {
    const testRenderer = TestRenderer.create(
      <Heading>Texto</Heading>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('h1').children).toEqual(['Texto']);
  });
});
