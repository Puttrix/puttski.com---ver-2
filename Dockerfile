# Multi-stage build for Next.js (Node 20, Debian slim)
FROM node:20-bookworm-slim AS base
WORKDIR /app

# Enable pnpm via corepack
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@10.15.1 --activate

# Install dependencies first (better caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

# Optionally prune dev deps to shrink image
RUN pnpm prune --prod

EXPOSE 3000
ENV PORT=3000 NODE_ENV=production
CMD ["pnpm", "start", "-p", "3000"]

