export interface ITeam {
  id: number
  name: string
  code: string
  country: string
  founded: number
  type: 'club' | 'national'
  logo: string
  president: string | null
  stadium: number
}
