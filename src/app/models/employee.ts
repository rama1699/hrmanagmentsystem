export interface Employee {
  id: number;
  username: string;
  password: string;
  name: string;
  role: 'admin' | 'employee';
  basicSalary: number;
  allowances: {
    DA: number;
    HRA: number;
    LTA: number;
    medical: number;
  };
  joiningDate: Date;
}