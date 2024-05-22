## 1. Cấu trúc folders
```
└───src
    │   App.tsx
    │   index.tsx
    ├───apis/                           # Chứa định nghĩa liên quan tới API
    │   │   base.api.ts
    │   └───{xxx}/
    │           │   index.ts            # Định nghĩa API endpoints
    │           ├───requests/xxx.requests.ts           # Định nghĩa API request types
    │           └───responses/xxx.responses.ts         # Định nghĩa API response types
    |───common                          #Chứa các định nghĩa chung của hàm: ví dụ như errors, css common
    ├───components/                     # Chứa các components
    │   ├───errors/                     # Common components liên quan tới lỗi
    │   ├───form/                       # Common components liên quan tới form (input/button)
    │   ├───partials/                   # Common components liên quan tới layouts: header, footer
    │   ├───table/                      # Common components liên quan tới table
    │   └───views/                      # Components dành cho các page, cụm chức năng
    ├───layouts/                        # Chứa layouts sử dụng chung
    ├───pages/                          # Chứa các page components
    │   │   DashboardPage.tsx
    │   │   LoginPage.tsx
    │   ├───{xxx}/
    │   └───{yyy}/
    ├───routes/                         # Định nghĩa các routes
    ├───store/
    │   │   index.ts                    # Khởi tạo redux store
    │   ├───actions/                    # Chứa các redux actions
    │   │       xxx.action.ts
    │   │       yyy.action.ts
    │   └───reducers/                   # Chứa các redux reducers
    │           xxx.reduder.ts
    │           yyy.reduder.ts
    ├───types/                          # Chứa các định nghĩa types
    └───utilities/                      # Chứa các xử lý common
            xxx.util.ts
            yyy.util.ts
```

## 2. Installation

### 2.1. Install Yarn

Chạy Terminal bằng quyền Admin
```bash
$ npm install -g yarn
```


### 2.2. Install dependencies
Chạy Terminal ở thư mục này
```bash
$ yarn install
```

## 3. Running the app
Chạy Terminal ở thư mục này
```bash
# development
$ yarn run start
```

## 3. Format code
Chạy Terminal ở thư mục này
```bash
# format
$ yarn format
