import React from 'react';
import { List, Datagrid, TextField, NumberField, ImageField, EditButton, DeleteButton } from 'react-admin';

const VehicleList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="make" label="Hãng xe" />
      <TextField source="model" label="Mẫu xe" />
      <NumberField source="year" label="Năm sản xuất" />
      {/* Hiển thị hình ảnh xe */}
      <ImageField source="image" label="Hình ảnh" />
      <EditButton basePath="/vehicles" />
      <DeleteButton basePath="/vehicles" />
    </Datagrid>
  </List>
);

export default VehicleList;