import { render } from "@testing-library/react";
import { rest } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const mockArray = new Array(100).fill({
  id: 1,
  name: "Incredible Plastic Pizza",
  description: "Molestiae iure eum voluptas culpa et ut quasi.",
  rating: 2,
  image: "https://picsum.photos/640/480?random=1074",
  promo: true,
  active: true,
});

export const handlers = [
  rest.get("*/products/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mockArray,
      })
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
