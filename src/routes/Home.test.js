import TestRenderer, { act } from 'react-test-renderer';
import { Home } from './Home';
import * as dateService from "../services/dateService";
import * as nasaApi from '../api/nasaApi';
import { DateInput } from '../components/DateInput';
import { Button } from '../components/Button';
import { Text } from '../components/Text';

const getNeoMock = () => ({
  close_approach_data: [
    {
      miss_distance: {
        kilometers: 2,
      }
    },
    {
      miss_distance: {
        kilometers: 4,
      }
    },
    {
      miss_distance: {
        kilometers: 3,
      }
    },
    {
      miss_distance: {
        kilometers: 10,
      }
    }
  ]
});

describe('Home', () => {
  beforeEach(() => {
    dateService.getDateDiff = jest.fn();
    nasaApi.getNasaList = jest.fn().mockResolvedValue({});
    nasaApi.getNeo = jest.fn().mockResolvedValue(getNeoMock());
    window.alert = jest.fn();
  });
    
  test('should retrieve api data on submit', async () => {
    const testRenderer = TestRenderer.create(
      <Home />
    );

    const testInstance = testRenderer.root;
    const form = testInstance.findByType('form');

    const initialDateInput = form.findAllByType(DateInput)[0];
    const finalDateInput = form.findAllByType(DateInput)[1];

    await act(async () => {
     await initialDateInput.props.onChange({ target: { value: '2022-10-29' } });
     await finalDateInput.props.onChange({ target: { value: '2022-10-30' } });
    });

    await act(async () => {
      await form.props.onSubmit();
    });

    expect(nasaApi.getNasaList).toHaveBeenCalledTimes(1);
  });

  test('should alert if period is bigger than 7 days', async () => {
    dateService.getDateDiff.mockReturnValue(10);
    window.alert = jest.fn();
    const testRenderer = TestRenderer.create(
      <Home />
    );

    const testInstance = testRenderer.root;
    const form = testInstance.findByType('form');

    const initialDateInput = form.findAllByType(DateInput)[0];
    const finalDateInput = form.findAllByType(DateInput)[1];

    await act(async () => {
     await initialDateInput.props.onChange({ target: { value: '2022-10-20' } });
     await finalDateInput.props.onChange({ target: { value: '2022-10-30' } });
    });

    await act(async () => {
      await form.props.onSubmit();
    });

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Por favor, selecione um período de no máximo sete dias.')
  });

  test('should alert on retrieve data error', async () => {
    nasaApi.getNasaList = jest.fn().mockRejectedValue({});
    window.alert = jest.fn();
    const testRenderer = TestRenderer.create(
      <Home />
    );

    const testInstance = testRenderer.root;
    const form = testInstance.findByType('form');

    const initialDateInput = form.findAllByType(DateInput)[0];
    const finalDateInput = form.findAllByType(DateInput)[1];

    await act(async () => {
     await initialDateInput.props.onChange({ target: { value: '2022-10-29' } });
     await finalDateInput.props.onChange({ target: { value: '2022-10-30' } });
    });


    await act(async () => {
      await form.props.onSubmit();
    });

    expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('Não foi possível buscar as informações :(. Tente mais tarde.')
  });

  test('should call api with 2015-09-08 date if clicked on button Feature 2', async () => {
     const testRenderer = TestRenderer.create(
      <Home />
     );
    
    const testInstance = testRenderer.root;
    const button = testInstance.findAllByType(Button)[1];

    await act(async () => {
      await button.props.onClick();
    });

    expect(nasaApi.getNasaList).toHaveBeenCalledTimes(1);
    expect(nasaApi.getNasaList).toHaveBeenCalledWith('2015-09-08', '2015-09-08');
  })

  test('should show smaller distance of neo 2465633', async () => {
    const testRenderer = TestRenderer.create(
      <Home />
     );
    
    const testInstance = testRenderer.root;
    const button = testInstance.findAllByType(Button)[2];

    await act(async () => {
      await button.props.onClick();
    });

    const text = testInstance.findByType(Text);

    expect(text.props.children).toContain(2);
  });
});
