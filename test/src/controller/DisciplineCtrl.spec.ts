import DisciplineController from '@src/controllers/DisciplineController';

describe('Testing DisciplineController', () => {
  const disciplineControllerMock = {
    registerDiscipline: jest.fn().mockReturnValue({
      _id: 1,
      _name: 'Teste',
      _description: 'Teste',
      _workload: 10,
    })
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register a discipline successfully', () => {
    const disciplineController = new DisciplineController();

    jest.spyOn(disciplineController, 'registerDiscipline').mockImplementationOnce(disciplineControllerMock.registerDiscipline);

    const result = disciplineController.registerDiscipline();

    expect(result).toEqual({
      _id: 1,
      _name: 'Teste',
      _description: 'Teste',
      _workload: 10,
    });

    expect(disciplineController.registerDiscipline).toHaveBeenCalledTimes(1);
  });
});
