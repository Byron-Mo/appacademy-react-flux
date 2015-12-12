class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true

  def self.in_bounds(bounds)
    benches = []
    southWestLat = bounds[:southWest][:sLat].to_f
    northEastLat = bounds[:northEast][:nLat].to_f
    southWestLng = bounds[:southWest][:sLng].to_f
    northEastLng = bounds[:northEast][:nLng].to_f

    self.all.each do |bench|
      if bench.lat.between?(southWestLat, northEastLat) && bench.lng.between?(southWestLng, northEastLng)
        benches << bench
      end
    end
  
    benches
  end
end
