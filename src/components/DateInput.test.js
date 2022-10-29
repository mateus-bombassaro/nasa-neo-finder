import TestRenderer from 'react-test-renderer';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  test('should set props', () => {
    const testRenderer = TestRenderer.create(
      <DateInput dummyProp="dummyPropValue" />
    );

   const testInstance = testRenderer.root;

    expect(testInstance.findByType('input').props.dummyProp).toBe('dummyPropValue');
  });
});
