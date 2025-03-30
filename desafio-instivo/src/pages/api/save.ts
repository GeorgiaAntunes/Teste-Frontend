import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveDataToJson: (data: any) => void = (data) => {
  const filePath = path.join(process.cwd(), 'data', 'addresses.json');
  try {
    const existingData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : [];
    existingData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8');
  } catch (error) {
    console.error('Erro ao salvar no arquivo:', error);
    throw new Error('Erro ao salvar no arquivo');
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const addressData = req.body; // Dados do endereço enviados no body da requisição
      console.log('Dados recebidos:', addressData); // Log para verificar os dados recebidos
      saveDataToJson(addressData); // Salva os dados no arquivo JSON
      res.status(200).json({ message: 'Dados salvos com sucesso!' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Erro ao salvar os dados:', error);
      res.status(500).json({ message: 'Erro ao salvar os dados.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' }); // Caso o método não seja POST
  }
};

export default handler;
