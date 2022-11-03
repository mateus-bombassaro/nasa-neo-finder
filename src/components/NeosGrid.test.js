import TestRenderer, { act } from 'react-test-renderer';
import { NeosGrid } from './NeosGrid';
import { Text } from './Text';

const getNeosByDay = () => ([
  {
    absolute_magnitude_h: '19,29',
    id: 1,
    name: 'neo name',
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 1.2949,
        estimated_diameter_max: 2.4333,
      }
    },
    is_potentially_hazardous_asteroid: true,
    is_sentry_object: false,
    links: {
      self: 'link'
    }
  },
  {
    absolute_magnitude_h: '26,20',
    id: 2,
    name: 'neo name 2',
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 2.4331,
        estimated_diameter_max: 5.2321,
      }
    },
    is_potentially_hazardous_asteroid: false,
    is_sentry_object: true,
    links: {
      self: 'link2'
    }
  }
]);

const getNeosDay = () => '2022-10-29';

describe('NeosGrid', () => {
  test('should render date', () => {
    const testRenderer = TestRenderer.create(
      <NeosGrid neosDay={getNeosDay()} neosByDayList={getNeosByDay()} />
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findByProps({ id: 'neos-date' }).props.children).toContain('29/10/2022');
  });

  test('should render neos', () => {
    const testRenderer = TestRenderer.create(
      <NeosGrid neosDay={getNeosDay()} neosByDayList={getNeosByDay()} />
    );

    const testInstance = testRenderer.root;
      
    expect(testInstance.findAllByProps({ id: 'neo' }).length).toEqual(2);
  });

  test('should render neo diameter', () => {
    const testRenderer = TestRenderer.create(
      <NeosGrid neosDay={getNeosDay()} neosByDayList={getNeosByDay()} />
    );

    const testInstance = testRenderer.root;
      
    const neo = testInstance.findAllByProps({ id: 'neo' });
    const diameter = neo[0].findAllByType(Text)[2];
      
   expect(diameter.props.children).toEqual(['Diâmetro estimado (Km): ','1.29 à 2.43']);
  });

  test('should render if neo is potentially danger', () => {
    const testRenderer = TestRenderer.create(
      <NeosGrid neosDay={getNeosDay()} neosByDayList={getNeosByDay()} />
    );

    const testInstance = testRenderer.root;
      
    const neo = testInstance.findAllByProps({ id: 'neo' });
    const diameter = neo[0].findAllByType(Text)[3];
      
   expect(diameter.props.children).toEqual('Potencialmente perigoso');
  });

  test('should render if neo is sentry object', () => {
    const testRenderer = TestRenderer.create(
      <NeosGrid neosDay={getNeosDay()} neosByDayList={getNeosByDay()} />
    );

    const testInstance = testRenderer.root;
      
    const neo = testInstance.findAllByProps({ id: 'neo' });
    const diameter = neo[1].findAllByType(Text)[3];
      
   expect(diameter.props.children).toEqual('Objeto sentinela');
  });

  test('should render neo link', () => {
    const testRenderer = TestRenderer.create(
      <NeosGrid neosDay={getNeosDay()} neosByDayList={getNeosByDay()} />
    );

    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType('a')[0].props.href).toEqual('link');
    expect(testInstance.findAllByType('a')[1].props.href).toEqual('link2');
  });
});
