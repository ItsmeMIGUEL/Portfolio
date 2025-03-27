import { Code, Terminal } from "lucide-react";

export default function CodeSamples() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 text-6xl font-mono">{"{"}</div>
        <div className="absolute top-40 right-20 text-6xl font-mono">{"}"}</div>
        <div className="absolute bottom-20 left-1/4 text-6xl font-mono">
          {"<>"}
        </div>
        <div className="absolute bottom-40 right-1/3 text-6xl font-mono">
          {"</>"}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Code Samples
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300">
            A glimpse of my coding style and approach
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-slate-800 dark:bg-slate-900 px-4 py-2 flex justify-between items-center">
              <div className="text-white font-mono text-sm flex items-center">
                <Code className="w-4 h-4 mr-2" />
                reactComponent.tsx
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4 font-mono text-sm bg-slate-900 text-slate-100 overflow-x-auto">
              <pre className="whitespace-pre-wrap">
                {`import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/data';

interface DataItem {
  id: string;
  title: string;
  value: number;
}

export const DataVisualizer: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="data-container">
      <h2>Data Visualization</h2>
      {data.map((item) => (
        <div key={item.id} className="data-item">
          <span>{item.title}</span>
          <div 
            className="data-bar"
            style={{ width: \`\${item.value}%\` }}
          />
        </div>
      ))}
    </div>
  );
};`}
              </pre>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-slate-800 dark:bg-slate-900 px-4 py-2 flex justify-between items-center">
              <div className="text-white font-mono text-sm flex items-center">
                <Terminal className="w-4 h-4 mr-2" />
                apiService.js
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4 font-mono text-sm bg-slate-900 text-slate-100 overflow-x-auto">
              <pre className="whitespace-pre-wrap">
                {`import axios from 'axios';

// API configuration
const API_BASE_URL = process.env.API_BASE_URL || 'https://api.example.com';
const API_KEY = process.env.API_KEY;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer \${API_KEY}\`
  },
  timeout: 10000
});

// Request interceptor for API calls
apiClient.interceptors.request.use(
  config => {
    // You can modify request config here
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    // Handle token refresh for 401 errors
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const token = await refreshToken();
        apiClient.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
