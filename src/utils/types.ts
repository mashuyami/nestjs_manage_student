export type CreateBuildingParams = {
    tenToaNha: string;
    soTang: number;
  };
  
  export type UpdateBuildingParams = {
    tenToaNha: string;
    soTang: number;
  };
  
export type CreateRoomParams = {
  tenPhong: string;
  viTriTang: number;
  soNguoiToiDa: number;
  gioiTinhSV: string;
  };
  
  export type UpdateRoomParams = {
    tenPhong: string;
    viTriTang: number;
    soNguoiToiDa: number;
    gioiTinhSV: string;
  };
export type CreateBedParams = {
  viTriGiuong: number;
  trangThai: number;
  };
  
  export type UpdateBedParams = {
    viTriGiuong: number;
    trangThai: number;
  };
  
export type CreateStudentParams = {
  avatar: string;
  soDienThoai: string;
  email: string;
  hoTen: string;
  };
  
  export type UpdateStudentParams = {
    avatar: string;
    soDienThoai: string;
    email: string;
    hoTen: string;
  };
  