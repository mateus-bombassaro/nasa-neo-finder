import TestRenderer from 'react-test-renderer';
import { Text } from './Text';

describe('Text', () => {
  test('should set classes', () => {
    const testRenderer = TestRenderer.create(
      <Text className="class">Texto</Text>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('p').props.className).toContain('class');
  });

  test('should set text', () => {
    const testRenderer = TestRenderer.create(
      <Text>Texto</Text>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('p').children).toEqual(['Texto']);
  });

  test('should set size', () => {
    const testRenderer = TestRenderer.create(
      <Text size="lg">Texto</Text>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('p').props.className).toContain('text-lg');
  });
});
