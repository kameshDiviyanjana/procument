import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import DataDisplay from './DataDisplay';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

test('Displays data retrieved from MongoDB', async () => {
  const mockData = [
    {
        "_id": "652bc98de6f89c52e37f451d",
        "ID": "1",
        "date": "20203/05/15",
        "empID": "E455",
        "empName": "sunimale parrera",
        "orderDetails": "san 1,mater",
        "__v": 0
    },
    {
        "_id": "652bd9580dc39dca5b32265e",
        "ID": "2",
        "date": "20203/06/15",
        "empID": "E78855",
        "empName": " parrera",
        "orderDetails": "san 1,mater",
        "__v": 0
    }
  ];

  // Mock the API request
  mock.onGet('http://10.0.2.2:3000/order/as').reply(304, mockData);

  const { getByText } = render(<DataDisplay />);

  await waitFor(() => {
    mockData.forEach((item) => {
      expect(getByText(item.ID)).toBeTruthy();
      expect(getByText(item.date)).toBeTruthy();
      expect(getByText(item.empID)).toBeTruthy();
      expect(getByText(item.empName)).toBeTruthy();
      expect(getByText(item.orderDetails)).toBeTruthy();
    });
  });
});
