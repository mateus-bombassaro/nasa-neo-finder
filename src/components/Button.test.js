import TestRenderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  test('should set classes', () => {
    const testRenderer = TestRenderer.create(
      <Button className="class">Texto do botão</Button>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('button').props.className).toContain('class');
  });

  test('should set props', () => {
    const testRenderer = TestRenderer.create(
      <Button dummyProp="dummyPropValue">Texto do botão</Button>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('button').props.dummyProp).toEqual('dummyPropValue');
  });

  test('should set button text', () => {
    const testRenderer = TestRenderer.create(
      <Button>Texto do botão</Button>
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('button').children).toEqual(['Texto do botão']);
  });
});
