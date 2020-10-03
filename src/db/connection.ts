import { createConnection, Connection } from 'typeorm';

export const ConnectDB = async () => {
  try {
    const result = await createConnection({
      type: 'postgres',
      url:
        'postgres://idxkahal:zID1i-T3ovoqLfXBuTlH0UmAeJjUKrH9@balarama.db.elephantsql.com:5432/idxkahal',
    });

    console.info(result);
  } catch (err) {
    console.error(err);
  }
};
