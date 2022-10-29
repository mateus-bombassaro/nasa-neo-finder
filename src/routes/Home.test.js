import TestRenderer, { act } from 'react-test-renderer';
import { Home } from './Home';
import * as dateService from "../services/dateService";
import * as nasaApi from '../api/nasaApi';

/**
 * @jest-environment jsdom
 */


describe('Home', () => {
  beforeEach(() => {
    dateService.getDateDiff = jest.fn();
    nasaApi.getNasaList = jest.fn().mockResolvedValue({});
  });
    
  test('should retrieve api data on submit', async () => {
    const testRenderer = TestRenderer.create(
      <Home />
    );

    const testInstance = testRenderer.root;
    const form = testInstance.findByType('form');

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

    await act(async () => {
      await form.props.onSubmit();
    });

    expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('Não foi possível buscar as informações :(. Tente mais tarde.')
  });
});
