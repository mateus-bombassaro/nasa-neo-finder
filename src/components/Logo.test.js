import TestRenderer from 'react-test-renderer';
import { Logo } from './Logo';

describe('Logo', () => {
  test('should set props', () => {
    const testRenderer = TestRenderer.create(
      <Logo dummyProp="dummyPropValue" />
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByType('svg').props.dummyProp).toContain('dummyPropValue');
  });
});
