import { ReportType } from '../types';
const STORAGE_KEY = 'reports';

export const getReportsFromStorage = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const getSingleReportFromStorage = (id: string) =>
  getReportsFromStorage().find((report: ReportType) => report.id === Number(id));

export const addReportToStorage = (newReport: Array<ReportType>) => {
  let savedReports = getReportsFromStorage() || [];
  savedReports = newReport.concat(savedReports);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedReports));
};

export const removeReportFromStorage = (id: number) => {
  let savedReports = getReportsFromStorage();
  savedReports = savedReports.filter((report: ReportType) => report.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedReports));
};

export const editReportFromStorage = (newReport: ReportType) => {
  let savedReports = getReportsFromStorage();
  const foundIndex = savedReports.findIndex(report => report.id === newReport.id);
  savedReports[foundIndex] = newReport;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedReports));
};