import { renderHook, act } from "@testing-library/react";
import { useCepForm } from "@/app/viewmodels/useCepForm";
import { getAddressByCep } from "@/app/services/cepService";

jest.mock("@/app/services/cepService", () => ({
  getAddressByCep: jest.fn(),
}));

describe("useCepForm Hook", () => {
  it("deve inicializar com os valores padrão", () => {
    const { result } = renderHook(() => useCepForm());

    expect(result.current.errors).toEqual({});
    expect(result.current.loading).toBe(false);
  });

  it("deve preencher os campos corretamente ao buscar um CEP válido", async () => {
    const mockGetAddressByCep = getAddressByCep as jest.Mock;
    mockGetAddressByCep.mockResolvedValue({
      logradouro: "Rua Teste",
      bairro: "Bairro Teste",
      cidade: "Cidade Teste",
      estado: "SP",
    });

    const { result } = renderHook(() => useCepForm());

    await act(async () => {
      await result.current.handleCepBlur();
    });

    expect(result.current.loading).toBe(false);
  });

  it("deve limpar os campos ao clicar no botão limpar", () => {
    const { result } = renderHook(() => useCepForm());

    act(() => {
      result.current.handleClear();
    });

    expect(result.current.errors).toEqual({});
  });
});
