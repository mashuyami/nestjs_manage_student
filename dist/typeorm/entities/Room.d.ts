import { Building } from './Building';
import { Bed } from './Bed';
export declare class Room {
    id: number;
    tenPhong: string;
    viTriTang: number;
    soNguoiToiDa: number;
    gioiTinhSV: string;
    hinhThucThanhToan: string;
    donGia: number;
    trangThai: number;
    building: Building;
    bed: Bed[];
}
