export interface ApiLinkInterface {
  url: null | string;
  label: string;
  active: boolean;
}

export interface ApiPaginationInterface {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: ApiLinkInterface[];
}

export interface ApiDataInterface<DataType> {
  data: DataType[];
  pagination: ApiPaginationInterface;
}

export interface UserInterface {
  id: number;
  name: string;
  initials: string;
  location: string;
  pic: string;
  badge: string;
  position: string;
  bio: string;
}

export interface RoleInterface {
  id?: number;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  department: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface RegionInterface {
  id: number;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  soato: number;
}

export interface DistrictInterface {
  id: number;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  soato: number;
  region_id: number;
}
