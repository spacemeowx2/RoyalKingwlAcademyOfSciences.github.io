export interface GIUser {
    login: string
    id: number
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    type: string
    site_admin: boolean
}
export interface GILabel {
    id: number
    url: string
    name: string
    color: string
    default: boolean
}
export interface GIIssue {
    url: string
    repository_url: string
    labels_url: string
    comments_url: string
    events_url: string
    html_url: string
    id: number
    number: number
    title: string
    user: GIUser
    labels: GILabel[],
    state: string
    locked: boolean
    assignee: GIUser
    assignees: GIUser[]
    comments: number
    created_at: string
    updated_at: string
    closed_at: string | null
    author_association: string
    body: string
}
